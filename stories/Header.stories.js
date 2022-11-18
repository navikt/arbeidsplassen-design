import React from "react";
import Header, {
    HeaderAuthenticationStatus,
    HeaderRoutes,
    HeaderVariant,
} from "../src/Header/Header";

export default {
    title: "Components/Header",
    component: Header,
    parameters: {
        layout: "fullscreen",
    },
};

const Template = (args) => <Header {...args} />;

export const All = Template.bind({});
All.args = {
    variant: "all",
    active: HeaderRoutes.PERSON,
    authenticationStatus: HeaderAuthenticationStatus.IS_AUTHENTICATED,
};

export const Person = Template.bind({});
Person.args = {
    variant: "person",
    active: HeaderRoutes.STILLIGER,
    authenticationStatus: HeaderAuthenticationStatus.IS_AUTHENTICATED,
    userName: "Navn Navnesen",
};

export const Company = Template.bind({});
Company.args = {
    variant: "company",
    active: HeaderRoutes.STILLINGSANNONSER,
    authenticationStatus: HeaderAuthenticationStatus.IS_AUTHENTICATED,
    companyName: "Bedrift AS",
};
