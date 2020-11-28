import * as React from 'react';
import styled from 'styled-components';
import _ from 'lodash';
// @ts-ignore
import CloseIcon from '../../images/close.svg';
import { AlternateContent } from '../../models/index';

import { GiAbstract007 } from 'react-icons/gi';
import { GiAirZigzag } from 'react-icons/gi';
import { GiAbstract053 } from 'react-icons/gi';
import { Gi3DHammer } from 'react-icons/gi';
import { GiArtificialHive } from 'react-icons/gi';
import { GiBattleMech } from 'react-icons/gi';
import { GiBorderedShield } from 'react-icons/gi';

type Props = {
  content: React.ReactNode;
  alternate_content: AlternateContent;
  title: string;
  handleClose: () => void;
};

const TooltipContent = React.memo(function({
  content,
  alternate_content,
  title,
  handleClose,
}: Props) {
  const { description, effect, types, cost } = alternate_content;

  const common_type = {
    spells: <GiAbstract007 />,
    active: <GiAirZigzag />,
    passive: <GiAbstract053 />,
    object: <Gi3DHammer />,
    reaction: <GiArtificialHive />,
    upgrade: <GiBattleMech />,
    prepared: <GiBorderedShield />,
  };

  const t = _.map(types, i => {
    switch (i) {
      case 'spells':
        common_type.spells;
        break;
      case 'active':
        common_type.active;
        break;
      case 'passive':
        common_type.passive;
        break;
      case 'object':
        common_type.object;
        break;
      case 'reaction':
        common_type.reaction;
        break;
      case 'upgrade':
        common_type.upgrade;
        break;
      case 'prepared':
        common_type.prepared;
        break;
      default:
        common_type.active;
        break;
    }
  });
  return (
    <React.Fragment>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Title>{title}</Title>
        <img
          onClick={handleClose}
          style={{
            width: '16px',
            margin: '21px 4px auto 0',
            cursor: 'pointer',
          }}
          src={CloseIcon}
          alt="icon"
        />
      </div>
      <ContentContainer>{description}</ContentContainer>
      <ContentContainer>{effect}</ContentContainer>
      <FlagContainer>{t}</FlagContainer>
      <CostContainer>{cost} JP</CostContainer>
      <ContentContainer>{content}</ContentContainer>
    </React.Fragment>
  );
});

export default TooltipContent;

const Title = styled.h1`
  margin: 8px 0;
`;

const ContentContainer = styled.div`
  margin: 8px 0;
`;

const FlagContainer = styled.div`
  margin: 8px 0;
  position: relative;
`;

const CostContainer = styled.div`
  text-align: right;
`;
