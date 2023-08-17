import { ChannelRole } from '.'

export class ChannelRoleProps {
  constructor (
        public readonly canAddContent: boolean,
        public readonly canManageChannel: boolean,
        public readonly canEditContents: boolean,
        public readonly canRemoveContents: boolean,
        public readonly canManageAdmins: boolean
  ) { }
}

const ChannelRolesProps: Readonly<{ [key in ChannelRole]: ChannelRoleProps }> = {
  [ChannelRole.OWNER]: new ChannelRoleProps(true, true, true, true, true),
  [ChannelRole.ADMIN]: new ChannelRoleProps(true, true, true, true, true),
  [ChannelRole.SPECIAL_MEMBER]: new ChannelRoleProps(true, true, true, true, true),
  [ChannelRole.MEMBER]: new ChannelRoleProps(true, true, true, true, true)
}

export default ChannelRolesProps
