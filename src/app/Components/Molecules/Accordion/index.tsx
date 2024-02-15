'use client';

import {
  AccordionDetails,
  AccordionSummary,
  Accordion as MUIAccordion,
  AccordionProps,
} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

type Props = AccordionProps & {
  header: React.ReactNode;
  children: React.ReactNode;
  expandedId: string;
  setExpandedId: Function;
  itemId: string;
};

const Accordion = (props: Props) => {
  const { children, header, expandedId, setExpandedId, itemId, ...proprties } =
    props;
  const expanded = itemId === expandedId;

  return (
    <MUIAccordion
      expanded={expanded}
      slotProps={{ transition: { unmountOnExit: true } }}
      onChange={() => setExpandedId(itemId)}
      sx={{
        background: 'transparent',
        boxShadow: 'none',
        width: '100%',
        padding: 0,
        '&::before': {
          height: 0,
        },
      }}
      disableGutters
      {...proprties}
    >
      <AccordionSummary
        sx={{
          paddingInline: 0,
        }}
        id='panel-header'
        aria-controls='panel-content'
        expandIcon={expanded ? <RemoveIcon /> : <AddIcon />}
      >
        {header}
      </AccordionSummary>
      <AccordionDetails
        sx={{
          paddingInline: 0,
        }}
      >
        {children}
      </AccordionDetails>
    </MUIAccordion>
  );
};

export default Accordion;
