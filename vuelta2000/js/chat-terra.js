/* ============================================
   CHAT DE TERRA - Lógica
   ============================================ */

const chatMessages = [
    { nick: 'AnGeL_o_DeMoNiO', text: 'jajaja esta peña está loca perdida!! xD' },
    { nick: 'ErMaKiNa_DeLPoLi', text: 'el k viene a la quedada??? yo llevo las latas!!' },
    { nick: 'TiGrEsA_974', text: 'holaaaa acabo de llegar!! q me he perdio??' },
    { nick: 'ReShUlOnA_69', text: 'nada mujer!! ablando de la verbena!! vas a ir??' },
    { nick: 'ChIcO_BaD_BoY', text: 'yo si!! tengo ya el modelito preparado jajaja' },
    { nick: '__LaUrItA__', text: 'omgg yo tambien!!! nos vemos alla primis 😘' },
    { nick: 'KiLLeR_DeL_bArRiO', text: 'alguien juega al counter?? agregadmeee!' },
    { nick: 'DJ_pUmPiT_uP', text: 'yo!! pero ahora no puedo primo!! luego me conecto' },
    { nick: 'MoReNaZa_2OoO', text: 'chicas sabeis donde puedo bajar canciones gratis?? xDD' },
    { nick: 'SuPeR_ChOnI', text: 'ares galaxy!!! ahi está todo!! musica, pelis, de todo!!' },
    { nick: 'ErPibItO_97', text: 'si si!! yo me bajo to x ares!! es la caña!!' },
    { nick: 'xXx_DaRk_AnGeL_xXx', text: 'teneis whatsapp??? a no espera k eso no existe todavia jajajaj' },
    { nick: 'LoCo_PoR_Ti_23', text: 'jajaja tio!! pasame tu msn mejor!!' },
    { nick: 'PrInCeSa_ReBeL', text: 'agregadme al messenger chic@s!! princesa_rebel@hotmail.com' },
    { nick: '_BeNiTa_GuApA_', text: 'yooo tambien kiero amigos nuevos!! agregadme pls 💕' }
];

let messageIndex = 0;

// Función para enviar mensaje (llamada desde HTML)
function sendMessage() {
    const input = document.getElementById('chat-input');
    const messagesContainer = document.getElementById('chat-messages');
    
    if (input && input.value.trim() !== '') {
        const now = new Date();
        const time = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
        
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chat-message';
        messageDiv.innerHTML = `
            <div class="chat-message-header">
                <span class="chat-message-nick">Tú</span>
                <span class="chat-message-time">${time}</span>
            </div>
            <div class="chat-message-text">${input.value}</div>
        `;
        
        messagesContainer.appendChild(messageDiv);
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
        
        input.value = '';
        
        // Respuesta automática después de 2-4 segundos
        setTimeout(() => {
            addRandomMessage();
        }, Math.random() * 2000 + 2000);
    }
}

function addRandomMessage() {
    const messagesContainer = document.getElementById('chat-messages');
    if (!messagesContainer) return;
    
    const randomMsg = chatMessages[messageIndex % chatMessages.length];
    messageIndex++;
    
    const now = new Date();
    const time = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`;
    
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message';
    messageDiv.innerHTML = `
        <div class="chat-message-header">
            <span class="chat-message-nick">${randomMsg.nick}</span>
            <span class="chat-message-time">${time}</span>
        </div>
        <div class="chat-message-text">${randomMsg.text}</div>
    `;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

document.addEventListener('DOMContentLoaded', function() {
    console.log('💬 Inicializando Chat de Terra...');
    
    // Permitir enviar con Enter
    const chatInput = document.getElementById('chat-input');
    if (chatInput) {
        chatInput.addEventListener('keypress', function(e) {
            if (e.key === 'Enter') {
                sendMessage();
            }
        });
    }
    
    // Añadir mensajes automáticos cada 10-20 segundos
    setInterval(() => {
        const chatTab = document.getElementById('chatterra');
        if (chatTab && chatTab.classList.contains('active')) {
            addRandomMessage();
        }
    }, Math.random() * 10000 + 10000);
    
    // Actualizar contador de usuarios online en chat
    setInterval(() => {
        const countElement = document.getElementById('online-count');
        if (countElement) {
            const current = parseInt(countElement.textContent);
            const change = Math.floor(Math.random() * 5) - 2;
            const newCount = Math.max(30, Math.min(45, current + change));
            countElement.textContent = newCount;
        }
    }, 8000);
    
    console.log('✅ Chat de Terra inicializado');
});
