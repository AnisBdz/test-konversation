<template>
    <div class="chat" >
        <Konversation ref="conversation" :rtl="true" avatar="👨" timeout="500"/>
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
            .say('مرحبا')
            .then(() =>   this.chat.say('ماهو إسمك؟'))
            .then(() =>   this.chat.ask('الرجاء كتابة إسمك'))
            .then(name => this.chat.respond(`إسمي هو ${name}`))

            .then(() =>   this.chat.say('متشرفين'))
            .then(() =>   this.chat.say('ما هو جنسك؟'))
            .then(() =>   this.chat.ask('الرجاء الإختيار', 'choice', { answers: [ { value: 0, label: 'أنثى' }, { value: 1, label: 'دكر' } ]}))
            .then(gndr => this.chat.respond(`أنا ${gndr.label}`))

            .then(() =>   this.chat.say('نحتاج بطاقة تعريف'))
            .then(() =>   this.chat.ask('الرجاء إختيار الملف', 'file', { api: 'http://localhost:3000/profile' }))
            .then(file => this.chat.respond('هاهو الملف المطلوب', [{ label: '💾 بطاقة التعريف', href: file }]))

            .then(() =>   this.chat.say('الرجاء إلقاء نظرة على هذا الملف', [{ label: '💾 شروط الإستخدام', href: 'https://www.bramley.com/BramleyTermsandConditionsofUse.pdf' }]))
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
