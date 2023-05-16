import React from "react";
import PropTypes from "prop-types";
import SEO from "@components/seo";
import Layout from "@layout";
import PageBreadcrumb from "../components/pagebreadcrumb";
import { normalizedData } from "@utils/functions";
import FunfactArea from "../container/home/funfact";
import GamesArea from "../container/games-page/popular-game";
import { graphql } from 'gatsby'

const WeaponPage = ({ data, location, pageContext, weapon }) => {
    const { id } = pageContext;
    console.log(data,"data",pageContext,id)
    const globalContent = normalizedData(data?.allGeneral?.nodes || []);
    const content = normalizedData(data?.page.content || []);
    return (
        <Layout
            data={{
                ...globalContent["menu"],
                ...globalContent["footer"],
            }} 
        >
            <SEO title="Games Page" pathname="/" />
            <PageBreadcrumb
                pageContext={pageContext}
                location={location}
                title={weapon}
            />
           
        </Layout>
    );
};

WeaponPage.propTypes = {
    location: PropTypes.object,
    pageContext: PropTypes.object,
    data: PropTypes.shape({
        allGeneral: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        page: PropTypes.shape({
            content: PropTypes.arrayOf(PropTypes.shape({})),
        }),
        allGames: PropTypes.shape({
            nodes: PropTypes.arrayOf(PropTypes.shape({})),
        }),
    }),
};
export const query = graphql`
  query weaponPageQuery {
    allGeneral {
        nodes {
            section
            id
            menu {
                ...Menu
            }
            footer {
                ...Footer
            }
        }
    }
    page(title: { eq: "home" }, pageType: { eq: homepage }) {
      content {
        ...PageContentAll
      }
    }
    allGames(sort: { date: DESC }) {
      nodes {
        ...Games
      }
    }
  }
`;


export default WeaponPage;
