<script lang="ts">
import Component from 'vue-class-component'
import { ChannelContent, ChannelContentModel, SentChannelContent } from '~/models'
import ChannelContentComponent from '~/components/content/ChannelContentComponent.vue'

@Component
export default class ChannelEditContentPage extends ChannelContentComponent {
  actionTitle = 'ویرایش'

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

  toChannelContentModel (content: ChannelContentModel): ChannelContentModel {
    return { ...content }
  }

  toSentChannelContent (content: ChannelContent): SentChannelContent {
    return {
      ...this.toChannelContentModel(content),
      text: content.complete_content ? content.complete_content.text : '',
      file: null
    }
  }

  mounted () {
    this.mainConfig.$facades.subscriber.getChannelContent(this.contentId).then((response) => {
      this.content = this.toSentChannelContent(response)
    })
  }

  contentAction () {
    this.mainConfig.$facades.channelManager.addContent(this.channelId, this.content).then(() => {
      this.$router.push({ name: 'ChannelPage' })
    })
  }
}
</script>
<router>
  {name: "ChannelEditContentPage"}
  </router>
