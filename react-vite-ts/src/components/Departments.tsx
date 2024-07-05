import { ChangeEvent, useEffect, useState } from 'react';
import department from '../assets/departments.json';
import { DepartmentList } from '../assets/typings';
import { Box, Checkbox, FormControlLabel, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

function Departments() {

  const [departments, setDepartments] = useState<DepartmentList[]>([]);
  const [checked, setChecked] = useState<{ [key: string]: boolean }>({});
  const [expanded, setExpanded] = useState<{[key: string]: boolean}>({});

  const handleCollapse = (dep: string) => {
    setExpanded((prev) => (
      {
        ...prev,
        [dep]: !prev[dep]
      }
    ));
  }

  const handleChange = (e:ChangeEvent<HTMLInputElement>, dep?: string) => {
    const {value, checked: isChecked} = e.target;
    setChecked((prev) => {
      const newChecked = {...prev, [value]: isChecked};

      if(dep) {
        const depts = departments.find((item) => item.department === dep)?.sub_departments || [];
        const allDeptsChecked = depts.every((sub) => newChecked[sub]);
        newChecked[dep] = allDeptsChecked;
      } else {
        const dept = departments.find((item) => item.department === value);
        if(dept) {
          dept.sub_departments.forEach((sub) => {
            newChecked[sub] = isChecked;
          });
        }
      }
      return newChecked;
    })
  }

  useEffect(() => {
    setDepartments(department);
  }, [])

  return (
    <div>
      {departments !== undefined ? departments.map((item) => 
      <Box sx={{width: '60%', mt: 1, margin: 'auto'}}>
      <Box>
        <IconButton onClick={() => handleCollapse(item.department)} size='small'>{expanded[item.department] ? <AddIcon/> : <RemoveIcon/>}</IconButton>
        <FormControlLabel label={item.department} control={
          <Checkbox checked={!!checked[item.department]} value={item.department} onChange={(e) => handleChange(e)} />
        } />
      </Box>
      {!expanded[item.department] && (
        <Box sx={{ display: 'flex', flexDirection: 'column', ml: 5 }} >
        {item.sub_departments.map(el => <FormControlLabel label={el} control={
          <Checkbox checked={!!checked[el]} value={el} onChange={(e) => handleChange(e,item.department)} />
        } />)}
      </Box>
      )}
      </Box>) : <></>}
    </div>
  )
}

export default Departments;
