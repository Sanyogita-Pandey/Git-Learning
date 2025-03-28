#include<stdio.h>
int main(){
    int n,m;
    printf("Enter no of rows : ");
    scanf("%d",&m);
     printf("Enter no of columns : ");
    scanf("%d",&n);
    int arr[m][n];
    for( int i=0; i<m ; i++){
        for(int j=0; j<n; j++){
            scanf("%d",&arr[i][j]);
        }
    }
     for( int i=0; i<m ; i++){
        for(int j=0; j<n; j++){
            printf("%d ",arr[i][j]);
        }
        printf("\n");
    }
    int minr =0;
    int maxr = m-1;
    int minc =0;
    int maxc = n-1;
    int count = 0;
    int tne = m*n;
    while(count<tne){
        for( int j=minc; j<=maxc;j++){
            printf("%d ",arr[minr][j]);
            count++;
        }
        minr++;
        if(count>=tne) break;
        for( int i=minr; i<=maxr;i++){
            printf("%d ",arr[i][maxc]);
            count++;
        }
        maxc--;
        if(count>=tne) break;
        for( int j=maxc; j>=minc;j--){
            printf("%d ",arr[maxr][j]);
            count++;
        }
        maxr--;
        if(count>=tne) break;
        for( int i=maxr; i>=minr;i--){
            printf("%d ",arr[i][minc]);
            count++;
        }
        minc++;
    }
    return 0;
}