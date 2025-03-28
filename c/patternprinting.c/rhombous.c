#include<stdio.h>
int main(){
    int n; 
    printf(" Enter length : ");
    scanf("%d",&n);
       int a; 
       printf(" Enter side of rhombous : ");
    scanf("%d",&a);
    for(int i =1; i<=n; i++){
        for( int j = 1; j<=n-i ; j++){
            printf(" ");
        }
        for( int k = 1; k<=a; k++){
            printf("*");
        }
        printf("\n");

    }
    return 0;
}