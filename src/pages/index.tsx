import { useEffect, useState } from 'react';
import { Button, TextField, Container, Select, MenuItem, SelectChangeEvent } from '@mui/material';
import { useRouter } from 'next/router';
import { makeStyles } from '@mui/styles';
import { useAppStore } from '@/store/store';
import { v4 as uuidv4 } from 'uuid';

const IndexPage = () => {
  const uuid = uuidv4();
  const router = useRouter();
  const [year, setYear] = useState(new Date().getFullYear());
  const [semester, setSemester] = useState('Spring');
  const { records } = useAppStore();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    router.push(`/${year}/${semester}`);
  };
  const handleEdit = (_year: string, _semester: string) => {
    // e.preventDefault();
    router.push(`/${_year}/${_semester}`);
  };

  return (
    <Container>
      <h1>Calculate NCKU GPA</h1>
      {
        Array.from(Object.entries(records)).map(_year => (
          Array.from(Object.entries(_year[1])).map(_semester => (
            <div key={uuidv4()}>
              <form onSubmit={() => handleEdit(_year[0], _semester[0])}>
                <Select
                  disabled
                  value={_year[0]}
                  MenuProps={{
                    PaperProps: {
                      style: {
                        maxHeight: '200px',  // Change the height as per your need
                      },
                    },
                  }}
                >
                  {[...Array(20)].map((_, i) => (
                    <MenuItem key={uuidv4()} value={new Date().getFullYear() - i}>
                      {new Date().getFullYear() - i}
                    </MenuItem>
                  ))}
                </Select>

                <Select disabled value={_semester[0]}>
                  <MenuItem value='Spring'>Spring</MenuItem>
                  <MenuItem value='Fall'>Fall</MenuItem>
                </Select>

                <Button type="submit">Edit</Button>
              </form>
            </div>
          )
          ))
        )
      }

      <form onSubmit={handleSubmit}>
        <Select
          value={year}
          onChange={(e: SelectChangeEvent<number>) => setYear(e.target.value as number)}
          MenuProps={{
            PaperProps: {
              style: {
                maxHeight: '200px',  // Change the height as per your need
              },
            },
          }}
        >
          {[...Array(20)].map((_, i) => (
            <MenuItem key={i} value={new Date().getFullYear() - i}>
              {new Date().getFullYear() - i}
            </MenuItem>
          ))}
        </Select>

        <Select value={semester} onChange={(e) => setSemester(e.target.value as string)}>
          <MenuItem value='Spring'>Spring</MenuItem>
          <MenuItem value='Fall'>Fall</MenuItem>
        </Select>

        <Button type="submit">Select</Button>
      </form>

    </Container>
  );
};

const Index = () => {
  const [isServer, setIsServer] = useState(true);
  useEffect(() => {
    setIsServer(false);
  }, []);
  return (
    <>
      {!isServer && <IndexPage />}
    </>
  );
}

export default Index;
