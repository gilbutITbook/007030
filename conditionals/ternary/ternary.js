function configureTimePermissions(title) {
  //  # START:const
  const permissions = title === '과장' ? ['근로시간', '수당'] : ['근로시간'];
  //  # END:const
  return permissions;
}

export { configureTimePermissions };
