$(document).ready(function() {
  $('#user-input').on('keypress', function(event) {
    if (event.which === 13 && $('#user-input').val() !== '') {
      var userMessage = $('#user-input').val();
      $('#user-input').val('');
      $('#chat-container').append('<div class="chat-bubble user-bubble"><p>' + userMessage + '</p></div>');

      var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.openai.com/v1/engines/davinci-codex/completions",
        "method": "POST",
        "headers": {
          "Content-Type": "application/json",
          "Authorization": "Bearer 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"
        },
        "data": JSON.stringify({
          "prompt": userMessage,
          "max_tokens": 50,
          "n": 1,
          "stop": "\n"
        })
      };

      $.ajax(settings).done(function(response) {
        var botMessage = response.choices[0].text;
        $('#chat-container').append('<div class="chat-bubble bot-bubble"><p>' + botMessage + '</p></div>');
      });
    }
  });
});