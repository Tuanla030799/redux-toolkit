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
    return (
        <div>
            {(profiles || []).map((profile: Profile) => {
                return (
                    <div key={profile.id}>
                        <span>name: {profile.name}</span>
                        <span>gender: {profile.gender}</span>
                        <span>age: {profile.age}</span>
                    </div>
                )
            })}
        </div>
    );
};

export default HomePage;