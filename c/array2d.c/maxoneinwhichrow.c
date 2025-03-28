#include<stdio.h>
int main(){
    int arr[3][3] = {{1,0,1},{1,1,0},{1,1,1,} };
    int maxcount = 0;
    int maxIdx = -1;
    for( int i=0; i<=3;i++){
        int count = 0;
        for( int j=0; j<=3; j++){
            if( arr[i][j] == 1) count ++;
        }
        if( maxcount<count){
            maxcount = count;
            maxIdx = i;
        }
        printf("\n");
    }
    printf(" one is in %d row %d times ",maxIdx,maxcount);
    return 0;

}