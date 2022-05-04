document.getElementById('url-button').addEventListener('click', () => {
    let url = document.querySelector('#url-field').value;

    fetch('https://api-ssl.bitly.com/v4/shorten', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer 8bc193fd57f143cc3b28257ac22351e775bb3cde',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                long_url: url,
                domain: 'bit.ly'
            })
        })
        .then(res => res.json())

        .then(r => {

            let {
                id,
                link
            } = r;

            if (link) {
                document.querySelector('#shortened-url').innerHTML = link;
                document.getElementById('shortened-url').hidden = false;
                document.getElementById('shortened-button').hidden = false;
            }

        });


});

document.getElementById('shortened-button').addEventListener('click', () => {
    let link = document.querySelector('#shortened-url').innerHTML;
    simplecopy(link);

    document.querySelector('#url-field').value = "";
    document.getElementById('shortened-url').hidden = true;
    document.getElementById('shortened-button').hidden = true;

    Toastify({
        text: "Link copied!",
        duration: 2000,
        newWindow: true,
        gravity: "bottom", // `top` or `bottom`
        position: "center", // `left`, `center` or `right`
        stopOnFocus: true, // Prevents dismissing of toast on hover
        style: {
          background: "#00b09b",
        }
      }).showToast();
});