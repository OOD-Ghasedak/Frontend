export enum ChannelRole {
  VISITOR = 'viewer', MEMBER = 'subscriber', SPECIAL_MEMBER = 'premium subscriber', ADMIN = 'admin', OWNER = 'owner'
}

interface ChannelRoleProps {
  canManageChannel: boolean,
  canManageAdmins: boolean,
  canAddContent: boolean,
  canManageContents: boolean,
  canLeaveChannel: boolean,
  canJoinChannel: boolean,
}

export const ChannelRolesProps: Readonly<{ [key in ChannelRole]: Partial<Readonly<ChannelRoleProps>> }> = {
  [ChannelRole.OWNER]: {
    canManageChannel: true,
    canManageAdmins: true,
    canAddContent: true,
    canManageContents: true
  },
  [ChannelRole.ADMIN]: {
    canAddContent: true,
    canManageContents: true
  },
  [ChannelRole.SPECIAL_MEMBER]: {
    canLeaveChannel: true
  },
  [ChannelRole.MEMBER]: { canLeaveChannel: true },
  [ChannelRole.VISITOR]: { canJoinChannel: true }
}
