<template>
    <div class="chat" >
        <Konversation ref="conversation" :rtl="false" avatar="👨" timeout="500"/>
    </div>
</template>

<script>

import Konversation from 'konversation-vue'

export default {
    components: { Konversation },

    computed: {
        chat() {
            return this.$refs.conversation
        }
    },

    mounted() {

            this.chat
            .say('Hello')
            .then(() =>   this.chat.say('What is your name?'))
            .then(() =>   this.chat.ask('Please type your name'))
            .then(name => this.chat.respond(`My name is ${name}`))

            .then(() =>   this.chat.say('Nice to meet you!'))
            .then(() =>   this.chat.say('What is your gender?'))
            .then(() =>   this.chat.ask('Please choose your gender', 'choice', { answers: [ { value: 0, label: 'Female' }, { value: 1, label: 'Male' } ]}))
            .then(gndr => this.chat.respond(`I am ${gndr.label}`))

            .then(() =>   this.chat.say('We need a picture of your ID'))
            .then(() =>   this.chat.ask('Please upload your id', 'file', { api: 'http://localhost:3000/profile' }))
            .then(file => this.chat.respond('Here is the file requested', [{ label: '💾 ID Card', href: file }]))

            .then(() =>   this.chat.say('Please take a look at this file', [{ label: '💾 Terms of use', href: 'https://www.bramley.com/BramleyTermsandConditionsofUse.pdf' }]))
    }
}
</script>

<style lang="css">
    body {
        background: #efefef;
    }

    .chat {
        max-width: 600px;
        margin: auto;
        background: white;
        padding: 25px;
        border-radius: 10px;
    }
</style>
