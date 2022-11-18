import React from "react";
import Header from "../src/Header/Header";

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
    active: "person",
    authenticationStatus: "is-authenticated",
};

export const Person = Template.bind({});
Person.args = {
    variant: "person",
    active: "ledige-stillinger",
    authenticationStatus: "is-authenticated",
    userName: "Navn Navnesen",
};

export const Company = Template.bind({});
Company.args = {
    variant: "company",
    active: "stillingsannonser",
    authenticationStatus: "is-authenticated",
    companyName: "Bedrift AS",
};
