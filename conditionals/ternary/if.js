/* eslint-disable block-scoped-var, no-redeclare, no-var, no-undef, no-unused-vars, vars-on-top */

function configureTimePermissionsWithConst({ title }) {
  if (title === '과장') {
    var permissions = ['근로시간', '수당'];
  } else {
    var permissions = ['근로시간'];
  }
  return permissions;
}

function configureTimePermissions({ title }) {
  //  # START:let
  if (title === '과장') {
    const permissions = ['근로시간', '수당'];
  } else {
    const permissions = ['근로시간'];
  }
  permissions;
  // ReferenceError: permissions is not defined
  //  # END:let
  return permissions;
}
function configureTimePermissionsScope({ title }) {
  //  # START:scope
  let permissions;
  if (title === '과장') {
    permissions = ['근로시간', '수당'];
  } else {
    permissions = ['근로시간'];
  }
  //  # END:scope
  return permissions;
}

export { configureTimePermissions, configureTimePermissionsScope };
