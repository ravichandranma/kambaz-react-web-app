export default function AssignmentEditor() {
    return (
        <div>
            <div id="wd-assignments-editor">
                <label htmlFor="wd-name"><strong>Assignment Name</strong></label><br /><br />
                <input id="wd-name" value="A1 - ENV + HTML" /><br /><br />

                <textarea id="wd-description" rows={10} cols={50}>
                    The assignment is available online Submit a link to the landing page of your Web application running on Netlify. The landing page should include the following: Your full name and section Links to each of the lab assignments Link to the Kanbas application Links to all relevant source code repositories The Kanbas application should include a link to navigate back to the landing page.
                </textarea>
                <br /><br />

                <table>
                    <tbody>
                    <tr>
                        <td><label htmlFor="wd-points">Points </label></td>
                        <td><input id="wd-points" type="number" value={100} /></td>
                    </tr>
                    <br />

                    <tr>
                        <td><label htmlFor="wd-group">Assignment Group </label></td>
                        <td>
                            <select id="wd-group">
                                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                            </select>
                        </td>
                    </tr>
                    <br />

                    <tr>
                        <td><label htmlFor="wd-display-grade-as">Display Grade as </label></td>
                        <td>
                            <select id="wd-display-grade-as">
                                <option value="percentage">Percentage </option>
                            </select>
                        </td>
                    </tr>
                    <br />

                    <tr>
                            <td><label htmlFor="wd-submission-type">Submission Type</label></td>
                            <td>
                                <select id="wd-submission-type">
                                    <option value="online">Online</option>
                                </select>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <div style={{ marginLeft: '20px' }}>
                                    Online Entry Options<br />
                                    <input type="checkbox" id="wd-text-entry" name="online-options" value="text-entry" />
                                    <label htmlFor="wd-text-entry">Text Entry</label><br />
                                    <input type="checkbox" id="wd-website-url" name="online-options" value="website-url" />
                                    <label htmlFor="wd-website-url">Website URL</label><br />
                                    <input type="checkbox" id="wd-media-recording" name="online-options" value="media-recording" />
                                    <label htmlFor="wd-media-recording">Media Recordings</label><br />
                                    <input type="checkbox" id="wd-student-annotation" name="online-options" value="student-annotation" />
                                    <label htmlFor="wd-student-annotation">Student Annotations</label><br />
                                    <input type="checkbox" id="wd-file-upload" name="online-options" value="file-upload" />
                                    <label htmlFor="wd-file-upload">File Uploads</label><br />
                                </div>
                            </td>
                        </tr>
                    </tbody>
                </table>
                <br />

                <br />
                <div id="wd-assign-section">
                    Assign
                    <div>
                        <table>
                            <tr>
                                <td><label htmlFor="wd-assign">Assign to</label></td>
                                <td><input id="wd-assign" value="Everyone" /></td>
                            </tr>

                            <br/>
                            <tr>
                                <td><label htmlFor="wd-due">Due</label></td>
                                <td><input id="wd-due" type="date" value="2024-05-13" /></td>
                            </tr>
                            <br/>
                            <tr>
                                <td colSpan={2}>
                                    <div>
                                        <label htmlFor="wd-available-from">Available from </label>
                                        <input id="wd-available-from" type="date" value="2024-05-06" style={{ marginRight: '20px' }} />
                                        <label htmlFor="wd-until">Until </label>
                                        <input id="wd-until" type="date" value="2024-05-20" />
                                    </div>
                                </td>
                            </tr>
                        </table>
                    </div>
                </div>

                <hr />
                <div style={{ textAlign: 'right' }}>
                    <button type="button" style={{ marginRight: '10px' }}>Cancel</button>
                    <button type="submit">Save</button>
                </div>
            </div>
        </div>
    );
}
