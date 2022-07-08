import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from '../../store';
import { fetchProfileList } from './thunks';
import { Profile } from './types';

const HomePage = () => {
    const dispatch = useDispatch();
    const profiles = useSelector((state: AppState) => state.profile.profiles);

    useEffect(() => {
        dispatch(fetchProfileList());
    }, [dispatch]);

    console.log("first", profiles)
    return (
        <div>
            {(profiles || []).map((profile: Profile) => {
                return (
                    <div key={profile.id}>
                        <p>name:{profile.name}</p>
                        <p>gender:{profile.gender}</p>
                        <p>age:{profile.age}</p>
                    </div>
                )
            })}
        </div>
    );
};

export default HomePage;