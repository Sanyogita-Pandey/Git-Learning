#include<stdio.h>
int main(){
    int n,m;
    printf(" enter the no of rows : ");
    scanf("%d",&m);
    printf(" enter the no of columns : ");
    scanf("%d",&n);
    int arr[m][n];
    for(int i=0; i<m; i++){
        for(int j=0; j<n; j++){
            scanf("%d",&arr[i][j]);
        }
    }
    printf("\n");
    for(int j=0; j<n; j++){
         if(j%2!=0){
        for(int i=0; i<m; i++){
           printf("%d ",arr[i][j]);
        }
      }
        else{
        for(int i=m-1; i>=0; i--){
            printf("%d ",arr[i][j]);
        }
      }
       printf("\n");
    }
    return 0;
}