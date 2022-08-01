let lastid = -1;

function poll() {
    $.ajax({
        url: `/api/chat/fetch?start=${lastid + 1}`,
        type: "GET",
        success: function (data) {
            if (data.length > 0) {
                for (let i = 0; i < data.length; i++) {
                    let msg = data[i];
                    let time = new Date(Date.UTC(...msg.time)).toTimeString().substring(0, 8);
                    $('#chatbox').append(
                        `<div class="chat-message" id="msg-${msg.id}">
                            <div class="header">
                                ${msg.prefix}
                                <span class="name">${msg.name}</span>
                                <span class="time">${time}</span>
                            </div>
                            <div class="content">${msg.content}</div>
                        </div>
                    `);
                    lastid = msg.id;
                    // setTimeout(() => {
                    //     $('#msg-' + msg.id).addClass('fade-out');
                    //     setTimeout(() => {
                    //         $("#msg-" + msg.id).remove();
                    //     }, 1000);
                    // }, 20000);
                    $('#chatbox').animate({scrollTop: $('#chatbox').prop('scrollHeight')}, 500);
                }
            }
        }
    });
}
setInterval(poll, 1000);