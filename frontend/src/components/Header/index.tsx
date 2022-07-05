import { RiArrowDropDownLine, RiArrowDropUpLine } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
import { MdGroup, MdExitToApp } from 'react-icons/md';

import {
  useEffect, useRef, useState,
} from 'react';
import * as S from './styles';

import Logo from '../../assets/images/devchallenges.svg';
import { useAuth } from '../../contexts/AuthContext';

export function Header() {
  const [isProfileOptionsOpen, setIsProfileOptionsOpen] = useState(false);

  const { user, signOut } = useAuth();

  const profileRef = useRef<HTMLDivElement>(null);
  const actionsRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (!profileRef.current?.contains(event.target as Node)
        && !actionsRef.current?.contains(event.target as Node)) {
        setIsProfileOptionsOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <S.Container>
      <S.Wrapper>
        <img src={Logo} alt="devchallenges" />

        <S.ProfileWrapper>
          <S.Actions
            ref={actionsRef}
            onClick={() => setIsProfileOptionsOpen((prevState) => !prevState)}
          >
            <img src={user?.avatar} alt={user?.name} />

            <p>{user?.name || 'My Profile'}</p>

            <S.ActionsArrow isOpen={isProfileOptionsOpen}>
              <RiArrowDropDownLine size={24} />
            </S.ActionsArrow>

          </S.Actions>

          {isProfileOptionsOpen && (
            <S.ProfileModal ref={profileRef}>
              <S.ProfileSection>
                <S.ProfileOption>
                  <FaUserCircle size={20} color="#4F4F4F" />
                  <p>My Profile</p>
                </S.ProfileOption>

                <S.ProfileOption>
                  <MdGroup size={20} color="#4F4F4F" />
                  <p>Group Chat</p>
                </S.ProfileOption>
              </S.ProfileSection>

              <S.ProfileSection>
                <S.ProfileOption danger onClick={signOut}>
                  <MdExitToApp size={20} color="#EB5757" />
                  <p>Logout</p>
                </S.ProfileOption>
              </S.ProfileSection>
            </S.ProfileModal>
          )}
        </S.ProfileWrapper>
      </S.Wrapper>
    </S.Container>
  );
}
