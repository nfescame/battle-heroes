import Paper from "@material-ui/core/Paper";
import InputBase from "@material-ui/core/InputBase";
import "./search.css";

export default function CustomizedInputBase(props) {
  const { handleChange, search } = props;

  return (
    <section className='sectionSearch'>
      <Paper className='containerSearch'>
        <InputBase
          className='inputSearch'
          placeholder='Search '
          inputProps={{ "aria-label": "search" }}
          value={search}
          onChange={(e) => handleChange(e.target.value)}
        />
      </Paper>
    </section>
  );
}
