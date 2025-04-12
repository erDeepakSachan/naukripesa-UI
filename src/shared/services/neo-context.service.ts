import { Injectable, Inject } from '@angular/core';
import { TOKEN_NEO_CONTEXT, NeoContext } from '../objects/neo-context';

@Injectable({
  providedIn: 'root'
})
export class NeoContextService {

  constructor(@Inject(TOKEN_NEO_CONTEXT) private window: NeoContext) { }

  get context(): NeoContext {
    return this.window;
  }

}
