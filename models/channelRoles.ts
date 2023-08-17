import { ChannelRole } from '.'

export interface ChannelRoleProps {
  canManageChannel: boolean,
  canManageAdmins: boolean,
  canAddContent: boolean,
  canEditContents: boolean,
  canRemoveContents: boolean,
  canLeaveChannel: boolean
}

const ChannelRolesProps: Readonly<{ [key in ChannelRole]: Partial<Readonly<ChannelRoleProps>> }> = {
  [ChannelRole.OWNER]: {
    canManageChannel: true,
    canManageAdmins: true,
    canAddContent: true,
    canEditContents: true,
    canRemoveContents: true
  },
  [ChannelRole.ADMIN]: {
    canAddContent: true,
    canEditContents: true,
    canRemoveContents: true
  },
  [ChannelRole.SPECIAL_MEMBER]: {
    canLeaveChannel: true
  },
  [ChannelRole.MEMBER]: { canLeaveChannel: true }
}

export default ChannelRolesProps
