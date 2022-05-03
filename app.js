document.getElementById('url-button').addEventListener('click', () => {
    const userURL = document.querySelector('#url-field').value;

    //console.log(userURL);
    document.querySelector('#url-field').value = "";

    fetch('https://api-ssl.bitly.com/v4/shorten', {
            method: 'POST',
            headers: {
                Authorization: 'Bearer 8bc193fd57f143cc3b28257ac22351e775bb3cde',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                long_url: userURL,
                domain: 'bit.ly'
            })
        })
        .then(res => res.json())

        .then(r => {

            let {
                id,
                link
            } = r;

            console.log(link);
        });

    simplecopy(link);
});
