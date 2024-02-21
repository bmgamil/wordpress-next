'use client';

import {
  AccordionDetails,
  AccordionSummary,
  Accordion as MUIAccordion,
  AccordionProps,
} from '@mui/material';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';
import { useStyles } from './style';

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
  const { classes } = useStyles();

  return (
    <MUIAccordion
      expanded={expanded}
      slotProps={{ transition: { unmountOnExit: true } }}
      onChange={() => setExpandedId(itemId)}
      className={classes.accordion}
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
