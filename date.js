const botToken = '7117397067:AAHFLCLnxOQHFVBQJ44r0DUb7G01Fmj0v-0';
function sendTelegramMessage(text) {
    return fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            chat_id: '5719914218',
            text: text,
        }),
    });
}

function checkTimeAndPrint() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    // Get the current month and day
    const monthDay = `${now.getMonth() + 1}-${now.getDate()}`;

    const s = "'s";

    // Define target dates (month-day), times, and messages
    const targetTimes = [
        { monthDay: '6-11', hours: 6, minutes: 0, seconds: 0, message: `Hey, today is Anisha${s} birthday...` }, // Anisha
        { monthDay: '6-7', hours: 6, minutes: 0, seconds: 0, message: `Hey, today is Bhaiya${s} birthday...` }, // Bhaiya
        { monthDay: '12-6', hours: 6, minutes: 0, seconds: 0, message: `Hey, today is Anushree${s} birthday...` }, // Anu
        { monthDay: '7-25', hours: 6, minutes: 0, seconds: 0, message: `Hey, today is Dinesh${s} birthday...` }, // Dinesh
        { monthDay: '7-1', hours: 6, minutes: 0, seconds: 0, message: `Hey, today is Harendra${s} birthday...` }, // Harendra
        { monthDay: '4-7', hours: 6, minutes: 0, seconds: 0, message: `Hey, today is Hempushpa${s} birthday...` }, // Hempushpa
        { monthDay: '8-1', hours: 6, minutes: 0, seconds: 0, message: `Hey, today is Mamta${s} birthday...` }, // Mamta
        { monthDay: '3-26', hours: 6, minutes: 0, seconds: 0, message: `Hey, today is Mohan${s} birthday...` }, // Mohan
        { monthDay: '11-22', hours: 23, minutes: 45, seconds: 0, message: `Hey, today is Ritesh${s} birthday...` }, // Ritesh
        { monthDay: '9-13', hours: 6, minutes: 0, seconds: 0, message: `Hey, today is Sandip${s} birthday...` }, // Sandip
        { monthDay: '7-26', hours: 6, minutes: 0, seconds: 0, message: `Hey, today is Sapna${s} birthday...` }, // Sapna
        { monthDay: '6-28', hours: 6, minutes: 0, seconds: 0, message: `Hey, today is Shambhu${s} birthday...` }, // Shambhu
        { monthDay: '8-14', hours: 23, minutes: 45, seconds: 0, message: `Hey, today is Sindhu${s} birthday...` }, // Sindhu
        { monthDay: '5-10', hours: 6, minutes: 0, seconds: 0, message: `Hey, today is Starlord${s} birthday...` }, // Starlord
        { monthDay: '1-22', hours: 6, minutes: 0, seconds: 0, message: `Hey, today is Sunita mam${s} birthday...` }, // Sunita mam
        { monthDay: '3-6', hours: 6, minutes: 0, seconds: 0, message: `Hey, today is Vaibhav${s} birthday...` }, // Vaibhav
        { monthDay: '3-18', hours: 6, minutes: 0, seconds: 0, message: `Hey, today is Vivek${s} birthday...` }, // Vivek
        { monthDay: '11-18', hours: 6, minutes: 0, seconds: 0, message: `Hey, today is Bindu di${s} birthday...` }, // Bunu di
        //0thers
        { monthDay: '1-1', hours: 6, minutes: 0, seconds: 0, message: `Happy new year Sir...` }, // New year
        { monthDay: '8-25', hours: 19, minutes: 16, seconds: 0, message: `Testing${s} !!!` } // Testing
    ];

    // Check if the current time matches any target time
    const target = targetTimes.find(t => monthDay === t.monthDay && hours === t.hours && minutes === t.minutes && seconds === t.seconds);
    
    if (target) {
        sendTelegramMessage(target.message)
            .then(response => {
                if (response.ok) {
                    
                } else {
                    console.error('Failed to send message.');
                }
            })
            .catch(error => {
                console.error('Error:', error);
            });
    }

    const dateTimeString = now.toLocaleString();
    
}

// Set the function to run every second
const intervalId = setInterval(checkTimeAndPrint, 1000);



document.addEventListener('DOMContentLoaded', () => {
  const form = document.querySelector('.content');
  const nameInput = document.querySelector('.name');
  const emailInput = document.querySelector('.email');
  const sendButton = document.getElementById('sendButton');
  const botToken = '7117397067:AAHFLCLnxOQHFVBQJ44r0DUb7G01Fmj0v-0';

  sendButton.addEventListener('click', async (e) => {
    e.preventDefault();
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();

    if (name && email) {
      try {
        const response = await fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            chat_id: '5719914218',
            text: `Name: ${name}\nEmail: ${email}`,
          }),
        });

        if (response.ok) {
          nameInput.value = '';
          emailInput.value = '';
          alert('Information sent successfully.');
        } else {
          alert('Failed to send information. Please try again.');
        }
      } catch (error) {
        console.error('Error:', error);
        alert('Failed to send information. Please try again.');
      }
    } else {
      alert('Please fill out both fields.');
    }
  });
});

