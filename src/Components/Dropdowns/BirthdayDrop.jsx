import "./BirthdayDrop.css";

export const BirthdayDrop=()=>{
    return (
      <div id="navbar-dropdown-birthday-section-wrap">
        <div id="navbar-dropdown-birthday-section-content-row01">
          <div>Kids Birthday</div>
          <div>Adult Birthday</div>
        </div>

        <div id="navbar-dropdown-birthday-section-content-row02">
          <a href="/birthday/prince">
            <div>Prince</div>
          </a>
          <a href="/birthday/princess">
            <div>Princess</div>
          </a>
          <a href="/birthday/king">
            <div>King</div>
          </a>
          <a href="/birthday/queen">
            <div>Queen</div>
          </a>
        </div>

        {/* <div id="navbar-dropdown-birthday-section-content-row03">
          <div>Themes</div>
          <div>Themes</div>
          <div>Themes</div>
          <div>Themes</div>
        </div> */}
      </div>
    );
}