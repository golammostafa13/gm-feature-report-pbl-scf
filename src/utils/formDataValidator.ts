export const numberValidator = (value: number) => {
  if (isNaN(value)) return 'Only Number Allowed'
  return ''
}