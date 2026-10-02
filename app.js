let boardData = null;
let cards = [];

const BLOCKED_THRESHOLD = 3;

async function loadBoardData() {
    try {
        const response = await fetch('data/board.json');
        boardData = await response.json();
        
        const savedState = localStorage.getItem('obeya-board-state');
        if (savedState) {
            const parsed = JSON.parse(savedState);
            cards = parsed.cards || boardData.cards;
        } else {
            cards = [...boardData.cards];
        }
        
        renderBoard();
        checkAndon();
    } catch (error) {
        console.error('Failed to load board data:', error);
        document.getElementById('board').innerHTML = 
            '<p style="color: var(--andon-color); padding: 2rem;">Failed to load board data. Please refresh the page.</p>';
    }
}

function renderBoard() {
    const board = document.getElementById('board');
    board.innerHTML = '';
    
    boardData.columns.forEach(column => {
        const columnEl = createColumn(column);
        board.appendChild(columnEl);
    });
}

function createColumn(column) {
    const columnEl = document.createElement('div');
    columnEl.className = 'column';
    columnEl.dataset.columnId = column.id;
    
    const cardsInColumn = cards.filter(card => card.column === column.id);
    const currentWip = cardsInColumn.length;
    
    let isOverLimit = false;
    let isAtLimit = false;
    
    if (column.wipLimit !== null) {
        isOverLimit = currentWip > column.wipLimit;
        isAtLimit = currentWip === column.wipLimit;
        
        if (isOverLimit) {
            columnEl.classList.add('andon');
        }
    }
    
    const header = document.createElement('div');
    header.className = 'column-header';
    
    const title = document.createElement('div');
    title.className = 'column-title';
    title.textContent = column.name;
    header.appendChild(title);
    
    if (column.wipLimit !== null) {
        const wipIndicator = document.createElement('div');
        wipIndicator.className = 'wip-indicator';
        if (isOverLimit) {
            wipIndicator.classList.add('over-limit');
        } else if (isAtLimit) {
            wipIndicator.classList.add('at-limit');
        }
        wipIndicator.textContent = `WIP: ${currentWip}/${column.wipLimit}`;
        header.appendChild(wipIndicator);
    }
    
    columnEl.appendChild(header);
    
    const cardsContainer = document.createElement('div');
    cardsContainer.className = 'cards-container';
    
    cardsInColumn.forEach(card => {
        const cardEl = createCard(card);
        cardsContainer.appendChild(cardEl);
    });
    
    columnEl.appendChild(cardsContainer);
    
    columnEl.addEventListener('dragover', handleDragOver);
    columnEl.addEventListener('drop', handleDrop);
    columnEl.addEventListener('dragleave', handleDragLeave);
    
    return columnEl;
}

function createCard(card) {
    const cardEl = document.createElement('div');
    cardEl.className = `card ${card.swimlane}`;
    cardEl.draggable = true;
    cardEl.dataset.cardId = card.id;
    
    const isBlocked = card.daysInStage > BLOCKED_THRESHOLD;
    if (isBlocked) {
        cardEl.classList.add('blocked');
    }
    
    const title = document.createElement('div');
    title.className = 'card-title';
    title.textContent = card.title;
    cardEl.appendChild(title);
    
    const meta = document.createElement('div');
    meta.className = 'card-meta';
    
    const swimlaneBadge = document.createElement('span');
    swimlaneBadge.className = `swimlane-badge ${card.swimlane}`;
    swimlaneBadge.textContent = card.swimlane;
    meta.appendChild(swimlaneBadge);
    
    cardEl.appendChild(meta);
    
    if (card.notes) {
        const notes = document.createElement('div');
        notes.className = 'card-notes';
        notes.textContent = card.notes;
        cardEl.appendChild(notes);
    }
    
    const days = document.createElement('div');
    days.className = `card-days ${isBlocked ? 'blocked' : ''}`;
    days.textContent = `Days in stage: ${card.daysInStage}`;
    if (isBlocked) {
        days.textContent += ' ⚠️ BLOCKED';
    }
    cardEl.appendChild(days);
    
    cardEl.addEventListener('dragstart', handleDragStart);
    cardEl.addEventListener('dragend', handleDragEnd);
    
    return cardEl;
}

function handleDragStart(e) {
    e.target.classList.add('dragging');
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', e.target.innerHTML);
    e.dataTransfer.setData('cardId', e.target.dataset.cardId);
}

function handleDragEnd(e) {
    e.target.classList.remove('dragging');
}

function handleDragOver(e) {
    if (e.preventDefault) {
        e.preventDefault();
    }
    
    e.dataTransfer.dropEffect = 'move';
    
    const column = e.target.closest('.column');
    if (column) {
        column.classList.add('drag-over');
    }
    
    return false;
}

function handleDragLeave(e) {
    const column = e.target.closest('.column');
    if (column && !column.contains(e.relatedTarget)) {
        column.classList.remove('drag-over');
    }
}

function handleDrop(e) {
    if (e.stopPropagation) {
        e.stopPropagation();
    }
    
    const column = e.target.closest('.column');
    if (!column) return false;
    
    column.classList.remove('drag-over');
    
    const cardId = e.dataTransfer.getData('cardId');
    const targetColumnId = column.dataset.columnId;
    
    const card = cards.find(c => c.id === cardId);
    if (card && card.column !== targetColumnId) {
        card.column = targetColumnId;
        card.status = targetColumnId;
        card.daysInStage = 0;
        
        saveState();
        renderBoard();
        checkAndon();
    }
    
    return false;
}

function checkAndon() {
    let hasAndon = false;
    const messages = [];
    
    boardData.columns.forEach(column => {
        if (column.wipLimit !== null) {
            const cardsInColumn = cards.filter(card => card.column === column.id);
            if (cardsInColumn.length > column.wipLimit) {
                hasAndon = true;
                messages.push(`${column.name} over WIP limit (${cardsInColumn.length}/${column.wipLimit})`);
            }
        }
    });
    
    const blockedCards = cards.filter(card => card.daysInStage > BLOCKED_THRESHOLD);
    if (blockedCards.length > 0) {
        hasAndon = true;
        messages.push(`${blockedCards.length} card(s) blocked >3 days`);
    }
    
    const andonBanner = document.getElementById('andon-banner');
    const andonMessage = document.getElementById('andon-message');
    
    if (hasAndon) {
        andonMessage.textContent = messages.join(' • ');
        andonBanner.classList.remove('hidden');
    } else {
        andonBanner.classList.add('hidden');
    }
}

function saveState() {
    const state = {
        cards: cards,
        lastUpdated: new Date().toISOString()
    };
    localStorage.setItem('obeya-board-state', JSON.stringify(state));
}

document.addEventListener('DOMContentLoaded', loadBoardData);
