export const state = () => ({
    chatbot: false,
    networks: [
        {
            name: "Facebook",
            icon: "mdi-facebook",
            url: 'https://www.facebook.com/mitsuoysharag/'
        },
        {
            name: "Twitter",
            icon: "mdi-twitter",
            url: 'https://www.twitter.com/'
        },
        {
            name: "Linkedin",
            icon: "mdi-linkedin",
            url: "https://www.linkedin.com/in/israel-mitsuo-yshara-garc%C3%ADa-36a784213/"
        },
        {
            name: "Github",
            icon: "mdi-github",
            url: "https://github.com/mitsuoysharag"
        },
    ]
})

export const mutations = {
    setChatbot(state, value) {
        state.chatbot = value
    }
}