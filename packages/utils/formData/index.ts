export function objectToFormData<T extends Record<string, any>>(
  obj: T,
  outFormData?: FormData,
  parentKey?: string,
): FormData {
  const formData = outFormData ? outFormData : new FormData();
  for (const key in obj) {
    if (Object.prototype.hasOwnProperty.call(obj, key)) {
      const value = obj[key];
      const formKey = parentKey ? `${parentKey}[${key}]` : key;

      if (Array.isArray(value)) {
        for (let i = 0; i < value.length; i++) {
          const arrayKey = `${formKey}[${i}]`;
          const arrayValue = value[i];

          if (typeof arrayValue === 'object') {
            objectToFormData(arrayValue, formData, arrayKey);
          } else {
            formData.append(arrayKey, arrayValue);
          }
        }
      } else if (typeof value === 'object') {
        objectToFormData(value, formData, formKey);
      } else {
        formData.append(formKey, value);
      }
    }
  }
  return formData;
}

export function mergeFormData(targetFormData: FormData, sourceFormData: FormData): FormData {
  for (const [key, value] of sourceFormData.entries()) {
    targetFormData.append(key, value);
  }
  return targetFormData;
}
