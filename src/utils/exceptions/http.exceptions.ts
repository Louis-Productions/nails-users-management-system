import { HttpException, HttpStatus } from '@nestjs/common';

export function OnException(status: HttpStatus, error: any, message?: any) {
  return new HttpException(
    {
      status,
      error, // Get | Create | Update | Delete something fail!
      message, // We met error ...!
    },
    status,
  );
}
