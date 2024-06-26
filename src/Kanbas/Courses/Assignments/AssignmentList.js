import {Link, useNavigate, useParams} from "react-router-dom";
import React, {useEffect, useState} from "react";
import {useSelector, useDispatch} from "react-redux";
import {
  selectAssignment, deleteAssignment, setAssignments,
} from "./assignmentsReducer";
import {
  FaCircleCheck,
  FaEllipsisVertical,
  FaGripVertical,
  FaPencil,
  FaPlus, FaXmark
} from "react-icons/fa6";
import {
  MDBBtn, MDBModal, MDBModalBody,
  MDBModalContent,
  MDBModalDialog, MDBModalFooter,
  MDBModalHeader, MDBModalTitle
} from "mdb-react-ui-kit";
import * as client from "./client";

function AssignmentList() {
  const navigate = useNavigate();
  const {courseId} = useParams();
  useEffect(() => {
    client.findAssignmentsForCourse(courseId).then(
        (assignments) => dispatch(setAssignments(assignments)));
  }, [courseId]);
  const assignments = useSelector(
      (state) => state.assignmentReducer.assignments);
  const assignment = useSelector((state) => state.assignmentReducer.assignment);
  const dispatch = useDispatch();
  const handleClickAddAssignment = () => {
    const genRanHex = size => [...Array(size)].map(
        () => Math.floor(Math.random() * 16).toString(16)).join('');
    const hexId = genRanHex(24)
    dispatch(selectAssignment({
      title: "New Assignment",
      points: 100,
      description: "Assignment Description",
      availableFromDate: "2023-01-10",
      availableUntilDate: "2023-05-15",
      dueDate: "2023-05-15",
      _id: hexId,
      course: courseId
    }))
    navigate(`/Kanbas/Courses/${courseId}/Assignments/${hexId}`,
        {state: {isFormForEdit: false}});
  };

  function formatDate(inputDate) {
    const months = [
      "Jan", "Feb", "Mar", "Apr", "May", "Jun",
      "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
    ];
    const dateObj = new Date(`${inputDate}`);
    const monthAbbreviation = months[dateObj.getUTCMonth()];
    const day = dateObj.getUTCDate();
    const year = dateObj.getUTCFullYear();
    return `${monthAbbreviation} ${day} ${year}`;
  }

  const handleDeleteAssignment = (assignmentId) => {
    client.deleteAssignment(assignmentId).then((status) => {
      dispatch(deleteAssignment(assignmentId));
    });
  };

  const [deleteAssignmentModal, setDeleteAssignmentModal] = useState(false);
  const toggleOpen = () => {
    setDeleteAssignmentModal(!deleteAssignmentModal);
  }
  return (
      <>
        <ul className="assignments-content list-group">
          <li className="list-group-item">
            <div className="assignment-row-grip-container">
              <FaGripVertical/>
            </div>
            <div className="assignment-row-header">
              <div className="assignment-title">
                Assignments
              </div>
            </div>
            <div className="row-right-side-icons-container">
              <div className="assignment-row-ellipsis-container">
                <FaEllipsisVertical/>
              </div>
              <div className="assignment-row-icon-container plus"
                   onClick={() => {
                     handleClickAddAssignment({...assignment})
                   }}>
                <FaPlus/>
              </div>
              <span className="badge rounded-pill text-bg-primary">
              40% of Total
            </span>
            </div>
          </li>
          {
            assignments.map((assignment) => (
                <li className="list-group-item-secondary">
                  <div className="assignment-row-grip-container">
                    <FaGripVertical/>
                  </div>
                  <div className="assignment-row-icon-container pencil">
                    <FaPencil/>
                  </div>
                  <div className="assignment-information">
                    <div className="assignment-title">
                      <Link key={assignment._id}
                            onClick={() => {
                              dispatch(selectAssignment({...assignment}));
                            }}
                            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                            state={{isFormForEdit: true}}>
                        {assignment.title}
                      </Link>
                    </div>
                    <div className="assignment-deadline-points">
                      <strong>Due</strong> {formatDate(assignment.dueDate)}
                      &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
                      {assignment.points ? assignment.points : 0} pts
                    </div>
                  </div>
                  <div className="row-right-side-icons-container">
                    <div className="assignment-row-ellipsis-container"
                         onClick={() => {
                           dispatch(selectAssignment({...assignment}));
                           navigate(
                               `/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`,
                               {state: {isFormForEdit: true}});
                         }}>
                      <FaEllipsisVertical/>
                    </div>
                    <div className="assignment-row-icon-container x-mark"

                         onClick={() => {
                           dispatch(selectAssignment({...assignment}));
                           toggleOpen()
                         }}>
                      <FaXmark/>
                    </div>
                    <div className="assignment-row-icon-container">
                      <FaCircleCheck/>
                    </div>
                  </div>
                </li>
            ))
          }
        </ul>
        <MDBModal open={deleteAssignmentModal}
                  setOpen={setDeleteAssignmentModal} tabIndex='-1'>
          <MDBModalDialog>
            <MDBModalContent>
              <MDBModalHeader>
                <MDBModalTitle>Deleting Assignment</MDBModalTitle>
                <MDBBtn className='btn-close' color='none'
                        onClick={() => toggleOpen()}></MDBBtn>
              </MDBModalHeader>
              <MDBModalBody style={{fontWeight: 500}}>
                Are you sure you want to delete this assignment?
              </MDBModalBody>
              <MDBModalFooter>
                <button className="btn btn-secondary"
                        onClick={() => toggleOpen()}>Cancel
                </button>
                <button className="btn btn-primary" onClick={() => {
                  handleDeleteAssignment(assignment._id);
                  toggleOpen();
                }}>Yes
                </button>
              </MDBModalFooter>
            </MDBModalContent>
          </MDBModalDialog>
        </MDBModal>
      </>
  )
}

export default AssignmentList
