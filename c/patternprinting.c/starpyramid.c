#include<stdio.h>
int main(){
    int n;
    printf(" Enter no. of lines : ");
    scanf("%d",&n);
    int nst = 1;
    int nsp = n-1;
    for(int i=1; i<=n ; i++){
        for( int j=1; j<=nsp; j++){
         printf(" ");  
        }
        nsp = nsp -1;
        int a=1;
        for( int k =1; k<=nst ; k++){
           // printf("%d",k);
        //    int d = 1;
        //    d = a + 64;
        //    char ch = (char)d;
        //    printf("%c",ch);
        //    a++;
           printf("*");
        }
        nst = nst +2;
        printf("\n");
    }

    return 0;
}