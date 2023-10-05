import CourseNavigation from "../CourseNavigation/CourseNavigation.js";
import KanbasNavigation from "../../KanbasNavigation/KanbasNavigation.js"

function Grades() {
  return `
<table width="100%">
  <tbody>
  <tr>
    <td valign="top">
            ${KanbasNavigation("Courses")}
          </td>

          <td valign="top">
            ${CourseNavigation("Grades")}
          </td>

    <td valign="top">
      <select>
        <option>Gradebook</option>
      </select>
      <button>Import</button>
      <select>
        <option>Export</option>
      </select>
      <button>Configure</button>

      <h3>Student Names</h3>
      <input
          type="text"
          placeholder="Search Students"
      />

      <h3>Assignment Names</h3>
      <input
          type="text"
          placeholder="Search Assignments"
      />

      <br/>
      <br/>
      <div>
        <button>Apply Filters</button>
      </div>
      <br/>

      <table width="100%" border="1">
        <thead>
        <tr>
          <th>Student Name</th>
          <th>A1 - HTML</th>
          <th>A2 - CSS</th>
          <th>A3 - JS</th>
          <th>A4 - PHP</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <td>Anthony Kiedis</td>
          <td>100%</td>
          <td>100%</td>
          <td>100%</td>
          <td>100%</td>
        </tr>
        <tr>
          <td>Flea</td>
          <td>100%</td>
          <td>100%</td>
          <td>100%</td>
          <td>100%</td>
        </tr>
        <tr>
          <td>John Frusciante</td>
          <td>100%</td>
          <td>100%</td>
          <td>100%</td>
          <td>100%</td>
        </tr>
        <tr>
          <td>Chad Smith</td>
          <td>100%</td>
          <td>100%</td>
          <td>100%</td>
          <td>100%</td>
        </tr>
        </tbody>
        <tfoot></tfoot>
      </table>
    </td>
  </tr>
</table>
`;
}

export default Grades;
