import { useEffect, useState } from 'react';

import { capitalizeFirstLetter } from '../core/utils';
import { Status } from '../store/types';

function useAlert(name, resource) {
  const [alertInfo, setAlertInfo] = useState({
    isOpen: false,
    message: '',
    severity: 'info',
  });

  useEffect(() => {
    if (resource?.load?.status === Status.error) {
      setAlertInfo({
        isOpen: true,
        message: `Error loading the list of ${name}`,
        severity: 'error',
      });
    }
  }, [resource?.load?.status, name]);

  useEffect(() => {
    if (resource?.delete?.status === Status.error) {
      setAlertInfo({
        isOpen: true,
        message: `Error deleting a ${name}`,
        severity: 'error',
      });
    }
    if (resource?.delete?.status === Status.success) {
      setAlertInfo({
        isOpen: true,
        message: `${capitalizeFirstLetter(name)} deleted successfully`,
        severity: 'success',
      });
    }
  }, [resource?.delete?.status, name]);

  useEffect(() => {
    if (resource?.update?.status === Status.error) {
      setAlertInfo({
        isOpen: true,
        message: `Error updating a ${name}`,
        severity: 'error',
      });
    }
    if (resource?.update?.status === Status.success) {
      setAlertInfo({
        isOpen: true,
        message: `${capitalizeFirstLetter(name)} updated successfully`,
        severity: 'success',
      });
    }
  }, [resource?.update?.status, name]);

  useEffect(() => {
    if (resource?.create?.status === Status.error) {
      setAlertInfo({
        isOpen: true,
        message: `Error creating a ${name}`,
        severity: 'error',
      });
    }
    if (resource?.create?.status === Status.success) {
      setAlertInfo({
        isOpen: true,
        message: `${capitalizeFirstLetter(name)} created successfully`,
        severity: 'success',
      });
    }
  }, [resource?.create?.status, name]);

  return {
    alertInfo,
    setAlertInfo,
  };
}

export default useAlert;
