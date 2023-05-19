import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import GameCard from "../../../components/games-card";
import GameCategories from "../../../components/game-categories";
import SearchBox from "../../../components/search-filter";
import {getWeapons} from "../../../service/weapons"
import WeaponsContainer from "../../../components/weapons/weaponsContainer"


const AllWeapons = ({ data }) => {
    const [filterGames, setFilterGames] = useState([]);
    const [allWeapons, setallWeapons] = useState([]);
    const fetchGunsData = () => {
        getWeapons()
        .then(wepData => {
            setFilterGames(wepData)
            setallWeapons(wepData);
            console.log(wepData)
        })
    }
    
    useEffect(() => {
        fetchGunsData()
    }, [])
    const selectItem = function (e) {
        const selectWeapon = e.target.value;
        if (selectWeapon === "all") {
            setFilterGames(allWeapons.items);
            return;
        }
        const filteredGames = allWeapons
            .filter((weapon) => weapon.type == selectWeapon.toLowerCase());
        setFilterGames(filteredGames);
    };

    const categories = ["Rifle", "Shotgun","Pistol","Sniper","Smg"];

    // -------------------------
    // Search Box Flter
    // -------------------------

    // const searchValueTitle = data?.items.map((item) => item.title);
    const searchHelander = function (e) {
        const searchVal = e.target.value;
    };
    return (
        <section className="games-section pt-16 md:pt-12 pb-16 md:pb-28">
        <div className="container">
            <div className="filter-wrap bg-secondary-70 rounded-2xl px-5 py-7 mb-10 flex flex-col md:flex-row md:justify-between md:items-center">
                <div className="mb-5 md:mb-0">
                    <GameCategories
                        categories={categories}
                        selectItem={selectItem}
                    />
                </div>
                <div className="md:ml-5">
                    <SearchBox
                        searchHelander={searchHelander}
                    />
                </div>
            </div>
                <WeaponsContainer data={filterGames}></WeaponsContainer>
        </div>
    </section>
    
    );
};
AllWeapons.propTypes = {
    data: PropTypes.shape({
        section_title: PropTypes.shape({
            heading: PropTypes.string,
        }),
        items: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            })
        ),
        categories: PropTypes.arrayOf(
            PropTypes.shape({
                id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
            })
        ),
    }),
};
export default AllWeapons;