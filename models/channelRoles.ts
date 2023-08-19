export enum ChannelRole {
  MEMBER, SPECIAL_MEMBER, ADMIN, OWNER
}

interface ChannelRoleProps {
  canManageChannel: boolean,
  canManageAdmins: boolean,
  canAddContent: boolean,
  canManageContents: boolean,
  canLeaveChannel: boolean
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
  [ChannelRole.MEMBER]: { canLeaveChannel: true }
}
