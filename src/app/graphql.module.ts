import {NgModule} from '@angular/core';
import {ApolloModule, APOLLO_OPTIONS} from 'apollo-angular';
import {ApolloClientOptions, InMemoryCache} from '@apollo/client/core';
import {HttpLink} from 'apollo-angular/http';

const uri = 'https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clg56f1e00c2n01un8cmi4llg/master'; // <-- add the URL of the GraphQL server here
export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  return {
    link: httpLink.create({uri}),
    cache: new InMemoryCache(),
    headers: {
      "Authorization": "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2ODE2NTYzODEsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xnNTZmMWUwMGMybjAxdW44Y21pNGxsZy9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiNTIwNTgyMzMtYjZkNi00ZTQzLWEzZGEtOTcxZDQwNzFiZTNmIiwianRpIjoiY2xnamlzZ2R2Mm0wOTAxdDMydXF2MWJ3cSJ9.yU3PgkR0Rqs-xzkq8tR-isVM2MjgkRIgVRw0iudXTIZTlSI-vMFyz-QI95muK86XEyV_9aZnb6VQOTvQjJj_wUXtH5iOKpY3YbuPs97VoNJObCg71LB94BneaC7E7hbCK-BpElm6zrMKxaUqqQB8zNcOxWlb1fiAFrgwPNKG-6VnL6GXtqYCkMgzR-QlWXHVrAr3dZRYaVKsi_2ATUm-sb2J2xxyT-oUrXhoyXWhJWL6StSA6eZ3Z-atxKWgX62_DEps6_k28EZlEqhEnfwDCzpET1EocIVNeIVTyTtxqny6UGalNRlEBudgdBTndoEG0s9RckWCkJdjNDWYiX9NOpAubwsSQXVABHWlQJ5YSQbvF1oL-zF0NfYKzWn32JqaZd_08ctifdNyrDC3ALOnyn5gxTvAeJXwEO6qUDOZkMP0pKlMyIabUkvTxPCNdzdA2e6OsRvXKhYJNYgDQnEdQYHv84ayVbbTrHjbBVSfdDgY0Tkk1er5QfBMJG861EJ4xKX7uJOs764tKiGE3u1lI-c6aXpb-KIxyQ7XLdCahXL9syNJHtPs3jrBlYLBrYtdFYuh9QBjBGNAHv3_h5pcmWJnRh57g_sDKFUW-FyCRknkHWXBXxopCu0iRqQbVMy4qSNhd5DjPjkSryda2USpz224Ho-dYhhmHlPFlFptsyI"
    }
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
