import { TeamSetting } from "TFS/Work/Contracts";
import { createAction, ActionsUnion } from '../../../../Common/redux/Helpers/ActionHelper';

export const TeamSettingsReceivedType = "@@teamsettings/TeamSettingsReceived";
export const TeamSettingsActionCreator = {
    teamSettingsReceived: (teamId: string, teamSettings: TeamSetting) =>
        createAction(TeamSettingsReceivedType, {
            teamId,
            teamSettings
        })
}

export type TeamSettingsActions = ActionsUnion<typeof TeamSettingsActionCreator>;