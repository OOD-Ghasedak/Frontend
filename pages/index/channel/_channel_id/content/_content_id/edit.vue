<script lang="ts">
import Component from 'vue-class-component'
import { SentChannelContent } from '~/models'
import ChannelContentComponent from '~/components/content/ChannelContentComponent.vue'

@Component
export default class ChannelEditContentPage extends ChannelContentComponent {
  content: SentChannelContent = {
    title: '',
    summary: '',
    is_premium: false,
    price: 0,
    text: '',
    file: null
  }

  get contentId () {
    return this.$route.params.content_id
  }

  mounted () {
  }

  contentAction () {
    this.mainConfig.$facades.channelManager.addContent(this.channelId, this.content)
  }
}
</script>
<router>
  {name: "ChannelEditContentPage"}
  </router>
