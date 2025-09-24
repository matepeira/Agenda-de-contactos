import { inject } from '@angular/core';
import { CanActivateChildFn, RedirectCommand, Router } from '@angular/router';
import { AuthService } from '../services/auth-service';

export const onlyPublicUserGuard: CanActivateChildFn = (Route, state) => {
  const auth = inject(AuthService);
  const router = inject(Router);
  if(auth.token){
    const newpath = router.parseUrl("/");
    return new RedirectCommand(newpath, { 
      skipLocationChange: true, 
      });
  }
  return true;
};
