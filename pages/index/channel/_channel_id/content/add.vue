<script lang="ts">
import Component from 'vue-class-component'
import { SentChannelContent } from '~/models'
import ChannelContentComponent from '~/components/content/ChannelContentComponent.vue'

@Component
export default class ChannelAddContentPage extends ChannelContentComponent {
  actionTitle = 'افزودن'

  content: SentChannelContent = {
    title: '',
    summary: '',
    is_premium: false,
    price: 0,
    text: '',
    file: null
  }

  contentAction () {
    this.mainConfig.$facades.channelManager.addContent(this.channelId, this.content).then(() => {
      this.$router.push({ name: 'ChannelPage', params: { ...this.$route.params } })
    })
  }
}
</script>
<router>
  {name: "ChannelAddContentPage"}
</router>
