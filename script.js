function startCountdown() {
  function updateCountdown() {
    const now = new Date();
    const end = new Date(now.getFullYear(), now.getMonth(), now.getDate(), 23, 59, 59);

    if (now > end) {
      end.setDate(end.getDate() + 1);
    }

    const diff = Math.max(0, end.getTime() - now.getTime());

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    document.getElementById('days').textContent = String(days).padStart(2, '0');
    document.getElementById('hours').textContent = String(hours).padStart(2, '0');
    document.getElementById('minutes').textContent = String(minutes).padStart(2, '0');
    document.getElementById('seconds').textContent = String(seconds).padStart(2, '0');
  }

  updateCountdown();
  setInterval(updateCountdown, 1000);
}

function scrollToMessages() {
  const messagesSection = document.getElementById('messages');
  messagesSection.scrollIntoView({ behavior: 'smooth' });
}

function handleMessageSubmit(event) {
  event.preventDefault();

  const userName = document.getElementById('userName').value.trim();
  const userMessage = document.getElementById('userMessage').value.trim();

  if (userName && userMessage) {
    const messagesList = document.getElementById('messagesList');
    const messageElement = document.createElement('div');
    messageElement.className = 'wish-card p-4 rounded-3';
    messageElement.innerHTML = `
      <h5 style="color: #be123c; margin-bottom: 0.5rem;">${escapeHtml(userName)}</h5>
      <p style="color: #5f2818; margin-bottom: 0.5rem;">${escapeHtml(userMessage)}</p>
      <small style="color: #b45309;">${getCurrentTime()}</small>
    `;

    messagesList.insertBefore(messageElement, messagesList.firstChild.nextSibling);

    showAlert('Your message has been added! Thank you for your love and wishes!', 'success');

    document.getElementById('messageForm').reset();
  }
}

function getCurrentTime() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  return `${hours}:${minutes}`;
}

function setInitialTime() {
  document.getElementById('initialTime').textContent = getCurrentTime();
}

function showAlert(message, type) {
  const alertContainer = document.getElementById('alert-container');
  const alertElement = document.createElement('div');
  alertElement.className = `alert alert-${type} alert-dismissible fade show`;
  alertElement.setAttribute('role', 'alert');
  alertElement.innerHTML = `
    ${message}
    <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
  `;

  alertContainer.innerHTML = '';
  alertContainer.appendChild(alertElement);

  setTimeout(() => {
    if (alertElement.parentNode) {
      alertElement.remove();
    }
  }, 3000);
}

function escapeHtml(unsafe) {
  return unsafe
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

function addWishCardHoverEffects() {
  const wishCards = document.querySelectorAll('.wish-hover');
  wishCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.transform = 'translateY(-10px)';
      this.style.boxShadow = '0 15px 40px rgba(236, 72, 153, 0.3)';
    });

    card.addEventListener('mouseleave', function() {
      this.style.transform = 'translateY(0)';
      this.style.boxShadow = 'none';
    });
  });
}

document.addEventListener('DOMContentLoaded', function() {
  startCountdown();
  setInitialTime();
  addWishCardHoverEffects();
});

