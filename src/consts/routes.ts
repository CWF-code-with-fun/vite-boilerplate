export const ROUTES = {
    ACCOUNT_ACTION: "/account-action",

    ACCOUNT_DELETED: "/account-deleted",

    CHANGE_PLAN: "/change-to-free-plan",

    // dashboard
    APPLICATIONS: "/applications",

    ERROR: "/error",

    LOGIN: "/login",

    APPLICATIONS_DETAIL: "/applications/detail",

    RECOVER_MAIL_COMPLETED: "/recover-email-completed",

    APPLICATIONS_DETAIL_ANALYTICS: "/applications/detail/analytics",

    RESET_MAIL_COMPLETED: "/reset-email-completed",

    APPLICATIONS_DETAIL_ANALYTICS_CHANNEL: "/applications/detail/analytics/channel",

    RESET_PASSWORD: "/reset-password",

    APPLICATIONS_BROADCAST: "/broadcast",

    RESET_PASSWORD_COMPLETE: "/reset-password-complete",

    APPLICATIONS_DETAIL_ANALYTICS_CHANNEL_MEMBERS: "/applications/detail/analytics/channel/members",

    APPLICATIONS_ANALYTICS: "/analytics",

    // login / registration
    ROOT: "/",

    ACCOUNT: "/account",

    SIGNUP: "/signup",

    ACCOUNT_PLAN: "/change-to-enterprise-plan",
    SIGNUP_COMPLETED: "/signup-completed",
    ACCOUNT_PAYMENT: "/payment",
    ACCOUNT_RESET_MAIL: "/account/reset-email",
    SIGNUP_PROVISIONAL: "/signup-provisional",
    APPLICATIONS_DETAIL_ANALYTICS_CHANNEL_MEMBERS_PUBSUBSTATS:
        "/applications/detail/analytics/channel/members/pubsubstats",
    RESET_PASSWORD_INPUT: "/reset-password-input",
    APPLICATIONS_NEW: "/applications/new",
    APPLICATIONS_NOTIFICATION: "/notification",
    RESET_PASSWORD_SENT: "/reset-password-sent",
    APPLICATIONS_RECORDING: "/recording",
    REVERT_SECOND_FACTOR_ADDITION: "/revert-second-factor-addition",

    APPLICATIONS_SECURITY: "/security",
    PROJECTS: "/projects",
    INVITE_LOGIN: "/invite-login",
    PROJECTS_NOT_FOUND: "/projects-not-found",
    INVITE_RESET_PASSWORD: "/invite-reset-password",
    INVITE_RESET_PASSWORD_SENT: "/invite-reset-password-sent",
    PROJECT_NOT_FOUND_ERROR: "/project-not-found-error",
    INVITE_SIGNUP: "/invite-signup",
    INVITE_SIGNUP_COMPLETED: "/invite-signup-completed",
    INVITE_TOP: "/invite",
    PROJECTS_DETAIL: "/project-detail",
    USAGE: "/usage",
} as const;
