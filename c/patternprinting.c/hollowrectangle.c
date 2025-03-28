#include<stdio.h>
int main (){
    int n;
    printf(" Enter the length : ");
    scanf("%d",&n);
    int m;
    printf(" Enter the breadth : ");
    scanf("%d",&m);
    for( int i = 1; i<=n; i++){
        for( int j = 1; j <=m; j++){
             if( j==m || j==1 || i==1 || i==n )printf("*");
            else printf(" ");
        }
        printf("\n");
    }

    return 0;
}